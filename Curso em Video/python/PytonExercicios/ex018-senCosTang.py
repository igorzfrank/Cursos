import math
angulo = float(input('Digite um ângulo: '))
print('O ângulo de {}º tem o SENO de {:.2f}!'.format(angulo, math.sin(math.radians(angulo))))
print('O ângulo de {}º tem o COSSENO de {:.2f}!'.format(angulo, math.cos(math.radians(angulo))))
print('O ângulo de {}º tem a TANGENT de {:.2f}!'.format(angulo, math.tan(math.radians(angulo))))