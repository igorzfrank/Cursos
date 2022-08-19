def notas(*num, sit = False):
    """
    -> Função para analisar notas e situações de vários alunos.
    :param num: uma ou mais notas dos alunos (aceita várias)
    :param sit: valor opcional, indicando se deve ou não adicionar a situação
    :return: dicionário com várias informações sobre a situação da turma.
    """
    dados['Total'] = len(num)
    dados['Maior'] = max(num)
    dados['Menor'] = min(num)
    dados['Média'] = sum(num)/len(num)
    if dados['Média'] >= 7:
        situacao = 'BOA'
    elif dados['Média'] < 7 and dados['Média'] > 5:
        situacao = 'RAZOÁVEL'
    else:
        situacao = 'RUIM'
    if sit == True:
        dados['Situação'] = situacao
    return dados


dados = {}
resp = notas(5.5, 2.5, 10, 5, 10, 8, sit=True)
print(resp)