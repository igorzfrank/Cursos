n = int(input('Me diga um número qualquer: '))
resto = n % 2
if resto == 0:
    print('O número {} é Par'.format(n))
else:
    print('O número {} é Impar'.format(n))