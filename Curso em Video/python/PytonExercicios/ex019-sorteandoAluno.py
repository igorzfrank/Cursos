import random
aluno01 = str(input('Digite o nome do primeiro aluno: '))
aluno02 = str(input('Digite o nome do segundo aluno: '))
aluno03 = str(input('Digite o nome do terceiro aluno: '))
aluno04 = str(input('Digite o nome do quarto aluno: '))
alunos = [aluno01, aluno02, aluno03, aluno04]
print('O aluno escolhido foi {}!'.format(random.choice(alunos)))
