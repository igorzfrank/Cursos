l = float(input('Digite a largura da parede que você deseja pintar: '))
a = float(input('Digite a altura da parede que você deseja pintar: '))
print('A sua parede tem a dimensão de {:.2f}mx{:.2f}m e a sua área é de {:.2f}m2'.format(l,a,l*a))
print('Para pintar essa parede, você precisará de {:.2f}l de tinta!'.format((l*a)/2))