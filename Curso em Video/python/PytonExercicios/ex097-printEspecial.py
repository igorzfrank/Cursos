def escreva(frase):
    tam = len(frase) + 4
    print('-' * tam)
    print(f'  {frase}')
    print('-' * tam)


frase = str(input('Qual fase você quer escrever? '))
escreva(frase)