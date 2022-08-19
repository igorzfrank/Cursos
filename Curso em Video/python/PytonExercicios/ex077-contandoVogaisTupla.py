c = 0
palavras = ('aprender', 'programar', 'linguagem', 'python', 'curso', 'gratis', 'estudar', 'praticar', 'trabalhar', 'mercado', 'programador', 'futuro')
while c < len(palavras):
    print('\nNa palavra {} temos '.format(palavras[c].upper()),end='')
    for letra in palavras[c]:
        if letra in 'aeiou:':
            print(letra, end=' ')
    c += 1