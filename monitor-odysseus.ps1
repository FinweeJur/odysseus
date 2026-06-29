# Monitor Odysseus — reinicia o servidor se cair
$url = "http://127.0.0.1:7000"
try {
    $r = Invoke-WebRequest $url -UseBasicParsing -TimeoutSec 5 -ErrorAction Stop
    # Servidor respondendo — nada a fazer
} catch {
    # Servidor nao responde — reinicia via tarefa agendada
    $proc = Get-Process | Where-Object { $_.Path -like "*odysseus\venv\Scripts\python*" }
    if ($proc) { $proc | Stop-Process -Force -ErrorAction SilentlyContinue }
    Start-Sleep -Seconds 2
    Start-ScheduledTask -TaskName "Odysseus"
}
