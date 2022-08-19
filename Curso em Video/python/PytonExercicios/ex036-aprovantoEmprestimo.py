print('\033[1;32m-\033[m'*25)
print('\033[1;31mMINHA CASA MINHA VIDA\033[m 2.0')
print('\033[1;32m-\033[m'*25)
casa = float(input('Qual o valor da casa?: '))
salario = float(input('Qual é o seu salário?: '))
ano = int(input('Quantos anos de financiamento?: '))
parcela = casa/(ano*12)
print('\033[0;33mPara pagar uma casa de R$:{:.2f} em {} anos a prestação será de R$:{:.2f}!\033[m'.format(casa,ano,parcela))
if parcela > (salario*0.30):
    print('Empréstimo \033[1;31mNEGADO!\033[m')
else:
    print('Empréstimo \033[1;32mCONCEDIDO\033[m')