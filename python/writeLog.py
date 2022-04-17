import datetime

file_input = 'auth.log'
file_output = 'auth.json'

def lineToJSON(line):
    while( '  ' in line):
        line = line.replace('  ', ' ')

    separator = ' '
    maxsplit = 5
    parts = line.split(separator, maxsplit)
    
    year = datetime.datetime.now().year
    monht = datetime.datetime.strptime(parts[0], "%b").month
    day = parts[1]
    hour = parts[2]
    date = str(year) + '-' + str(monht) + '-' + day + ' ' + hour
    ip = parts[3].replace('-','.')[3:]
    type , idType = parts[4].replace(']:','').split('[')
    message = parts[5]

    new_json = {
        'date' : date,
        'ip' : ip,
        'type' : type,
        'idType' : idType,
        'message' : message
    }
    return new_json

def writeLine(line):
    with open(file_output, 'a') as file:
        file.write(line)

# 1. Ler log
file = open(file_input, 'r')
Lines = file.readlines()

count = 1
# 2. Ler Linha
for line in Lines:
    print(count)
    count+=1
    # 3. Dividir a linha em partes
    lineJson = lineToJSON(line)
    # 4. Salvar no banco
    writeLine(str(lineJson))