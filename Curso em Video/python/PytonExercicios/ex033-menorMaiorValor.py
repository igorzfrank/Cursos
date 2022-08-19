n1 = int(input('Digite o primeiro valor: '))
maior = n1
menor = n1
n2 = int(input('Digite o segundo valor: '))
if n2 > maior:
    maior = n2
if n2 < menor:
    menor = n2
n3 = int(input('Digite o terceiro valor: '))
if n3 > maior:
    maior = n3
if n3 < menor:
    menor = n3
print('O menor valor foi {}!'.format(menor))
print('O maior valor foi {}!'.format(maior))