from datetime import date
print('\033[1;33m-\033[m'*30)
print('\033[1;32mALISTAMENTO MILITAR\033[m')
print('\033[1;33m-\033[m'*30)
anoNascimento = int(input('Qual o seu ano de nascimento?: '))
anoAtual = date.today().year
idade = anoAtual - anoNascimento
print('Quem nasceu em {} tem {} anos em {}!'.format(anoNascimento, idade, anoAtual))
if idade < 18:
    print('Ainda faltam {} anos para o seu alistamento.'.format(18-idade))
    print('\033[1;32mSeu alistamento será em {}!\033[m'.format(anoNascimento+18))
elif idade == 18:
    print('\033[1;31mVocê deve se alistar IMEDIATAMENTE!\033[m')
else:
    print('Você deveria ter se alistado há {} anos'.format(idade-18))
    print('\033[1;33mSeu alistamento foi em {}\033[m'.format(anoNascimento+18))
