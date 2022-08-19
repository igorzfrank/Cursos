import time
alunos = []
while True:
    nome = str(input('Nome: ')).strip()
    nota1 = float(input('Nota 1: '))
    nota2 = float(input('Nota 2: '))
    media = (nota1 + nota2) / 2
    alunos.append([nome, [nota1, nota2], media])
    opcao = str(input('Quer continuar [s/n]?: ')).lower()
    if opcao == 'n':
        break
print('-' * 25)
print('No. NOME          MÉDIA')
print('-' * 25)
for i, a in enumerate(alunos):
    print(f'{i:<4}{a[0]:<10}{a[2]:>8.1f}')
print('-' * 25)
while True:
    aluno = int(input('Mostrar notas de qual aluno? (999 interrompe): '))
    print('-' * 25)
    if aluno == 999:
        break
    else:
        if aluno > len(alunos)-1:
            print('Opção Invalida!')
            print('-' * 25)
        else:
            print(f'As notas de {alunos[aluno][0]} são {alunos[aluno][1]}')
            print('-' * 25)
print('Finalizando...')
time.sleep(.5)
print('Programa Encerrado!')
