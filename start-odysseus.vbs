Set oShell = CreateObject("WScript.Shell")
oShell.Run """C:\Users\teste\odysseus\venv\Scripts\python.exe"" -m uvicorn app:app --host 127.0.0.1 --port 7000", 0, False
