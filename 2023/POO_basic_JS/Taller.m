clear

% IMPORTANTE: Para cada imagen fue nesesaio 
% un tratamiento diferente, por favor comentar 
% y descomentar segun corresponda

%% ------> IMAGEN DE FIGURAS <--------------
% imagen = imread("imagenes_testeo/prueba2grises.jpg");
% imagen = rgb2gray(imagen);
% 
% % Binarizar la imagen
% imagen_bw = im2bw(imagen,0.8);
% cleaned_image = imcomplement(imagen_bw);
%--------------------------------------------

%% ---------> IMAGEN DE MICROSCOPÍA <--------------
imagen = imread('imagenes_testeo/microscopia.jpg');

% Convierte la imagen a escala de grises
gray_image = rgb2gray(imagen);

% Aplica un filtro de mediana con una ventana de 100x100 píxeles
filtered_image = medfilt2(gray_image,[100 100]);

% Convierte la imagen a binaria usando un umbral de 0.7
binary_image = im2bw(filtered_image,0.7);

% Remueve objetos pequeños de la imagen con un área menor a 9000 píxeles
cleaned_image = bwareaopen(binary_image,9000);
% ----------------------------------------------------

%% Identificar objetos
[filas, columnas] = size(cleaned_image);
etiquetas = zeros(filas, columnas);
objetos = 0;

%% Algoritmo de busqueda profunda
for fila = 1:filas
    for columna = 1:columnas
        if cleaned_image(fila, columna) == 1 && etiquetas(fila, columna) == 0
            objetos = objetos + 1;
            etiquetas(fila, columna) = objetos;
            % Buscar los píxeles conectados al objeto
            pendientes = [fila, columna];
            while ~isempty(pendientes)
                actual = pendientes(1,:);
                pendientes(1,:) = [];
                for i = -1:1
                    for j = -1:1
                        % Verificar si el píxel está dentro de la imagen
                        if actual(1)+i > 0 && actual(1)+i <= filas && actual(2)+j > 0 && actual(2)+j <= columnas
                            % Verificar si el píxel no ha sido visitado
                            if etiquetas(actual(1)+i, actual(2)+j) == 0 && cleaned_image(actual(1)+i, actual(2)+j) == 1
                                etiquetas(actual(1)+i, actual(2)+j) = objetos;
                                pendientes(end+1,:) = [actual(1)+i, actual(2)+j];
                            end
                        end
                    end
                end
            end
        end
    end
end

%% Etiquetar los objetos
%  etiquetar cada objeto de forma única en la imagen
for i = 1:objetos
    etiquetas(etiquetas == i) = i * 255 / objetos;
end

% Mostrar la imagen etiquetada
subplot 211
imshow(imagen)
title('Imagen original')

subplot 212
imshow(etiquetas)
title(sprintf("Se han identificado %d objetos en la imagen.", objetos))

% Mostrar la cantidad de objetos
fprintf("Se han identificado %d objetos en la imagen.\n", objetos);


