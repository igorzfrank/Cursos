sexo = str(input('Informe o seu sexo [M/F]: ')).upper()
while sexo not in 'MF':
    sexo = str(input('Dados inválidos. Por favor, informe o seu sexo: ')).upper()
print('Sexo {} registrado com sucesso!'.format(sexo))