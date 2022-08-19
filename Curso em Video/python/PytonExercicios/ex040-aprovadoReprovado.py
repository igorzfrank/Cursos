print('\033[1;34m-\033[m'*25)
print('\033[1;32mAPROVADO\033[m / \033[1;31mREPROVADO\033[m')
print('\033[1;34m-\033[m'*25)
nota1 = float(input('Digite a primeira nota do ALUNO: '))
nota2 = float(input('Digite a segunda nota do ALUNO: '))
media = (nota1+nota2)/2
if media >= 7:
    print('Tirando {} e {}, a média do aluno é {}!'.format(nota1,nota2,media))
    print('\033[1;32mO aluno está APROVADO!\033[m')
elif media < 5.0:
    print('Tirando {} e {}, a média do aluno é {}!'.format(nota1,nota2,media))
    print('\033[1;31mO aluno está REPROVADO!\033[m')
else:
    print('Tirando {} e {}, a média do aluno é {}!'.format(nota1,nota2,media))
    print('\033[1;33mO aluno está RECUPERAÇÂO!\033[m')