## Problema
Log:

Nov 30 06:39:00 ip-172-31-27-153 CRON[21882]: pam_unix(cron:session): session closed for user root

O log apresenta 5 partes

1. date: 'Nov 30 06:39:00 '
2. ip: 'ip-172-31-27-153'
3. type(CRON/sshd): 'CRON'
4. id: '[21882]'
5. Mensage: ': pam_unix(cron:session): session closed for user root'

Gravação do Log em banco, readLog.py
1. Ler log
2. Ler Linha
3. Dividir a linha em partes
4. Salvar no banco

Leitura do log, searchDB.py
1. Buscar por parte
2. Buscar por Mensagem
