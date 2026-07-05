; Instalador do Cutia (Inno Setup 6)
; Slim installer: instala apenas o código da aplicação + CutiaLauncher.exe.
; O ambiente Python (venv) é criado automaticamente no primeiro uso pelo launcher.

#define MyAppName "Cutia"
#define MyAppVersion "1.0.0"
#define MyAppExeName "CutiaLauncher.exe"
#define MyAppRoot "C:\Users\teste\odysseus-pt"
#define MyAppURL "https://github.com/FinweeJur/odysseus-em-portugues-PT-BR-translation"

[Setup]
AppId={{B6C6E6A1-2F2F-4B6A-9C2A-CUTIA00000001}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppName}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={autopf}\{#MyAppName}
DefaultGroupName={#MyAppName}
DisableProgramGroupPage=yes
OutputDir={#MyAppRoot}\build\dist
OutputBaseFilename=CutiaSetup-1.0.0
SetupIconFile={#MyAppRoot}\build\cutia.ico
Compression=lzma2/ultra64
SolidCompression=yes
WizardStyle=modern
PrivilegesRequiredOverridesAllowed=dialog
ArchitecturesInstallIn64BitMode=x64compatible
MinVersion=10.0
UninstallDisplayIcon={app}\cutia.ico

[Languages]
Name: "brazilianportuguese"; MessagesFile: "compiler:Languages\BrazilianPortuguese.isl"

[Tasks]
Name: "desktopicon"; Description: "Criar atalho na área de trabalho"; GroupDescription: "Atalhos adicionais:"; Flags: unchecked

[Files]
; Launcher empacotado (PyInstaller) — único executável que o usuário abre
Source: "{#MyAppRoot}\build\dist\CutiaLauncher.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppRoot}\build\cutia.ico"; DestDir: "{app}"; Flags: ignoreversion

; Ícones PWA (manifest e favicon)
Source: "{#MyAppRoot}\static\icon-192.png"; DestDir: "{app}\static"; Flags: ignoreversion
Source: "{#MyAppRoot}\static\icon-512.png"; DestDir: "{app}\static"; Flags: ignoreversion

; Código-fonte da aplicação
Source: "{#MyAppRoot}\app.py"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppRoot}\setup.py"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppRoot}\requirements.txt"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppRoot}\pyproject.toml"; DestDir: "{app}"; Flags: ignoreversion skipifsourcedoesntexist
Source: "{#MyAppRoot}\src\*"; DestDir: "{app}\src"; Excludes: "__pycache__\*,*.pyc"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "{#MyAppRoot}\static\*"; DestDir: "{app}\static"; Excludes: "__pycache__\*,*.log"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "{#MyAppRoot}\routes\*"; DestDir: "{app}\routes"; Excludes: "__pycache__\*,*.pyc"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "{#MyAppRoot}\core\*"; DestDir: "{app}\core"; Excludes: "__pycache__\*,*.pyc"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "{#MyAppRoot}\services\*"; DestDir: "{app}\services"; Excludes: "__pycache__\*,*.pyc"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "{#MyAppRoot}\companion\*"; DestDir: "{app}\companion"; Excludes: "__pycache__\*,*.pyc"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "{#MyAppRoot}\config\*"; DestDir: "{app}\config"; Excludes: "__pycache__\*,*.pyc"; Flags: ignoreversion recursesubdirs createallsubdirs; Check: DirExists(ExpandConstant('{#MyAppRoot}\config'))
Source: "{#MyAppRoot}\.env"; DestDir: "{app}"; Flags: ignoreversion skipifsourcedoesntexist

[Dirs]
Name: "{app}\data"; Permissions: users-modify

[Icons]
Name: "{group}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; IconFilename: "{app}\cutia.ico"
Name: "{group}\Desinstalar {#MyAppName}"; Filename: "{uninstallexe}"
Name: "{autodesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; IconFilename: "{app}\cutia.ico"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "Iniciar o {#MyAppName} agora"; Flags: nowait postinstall skipifsilent

[UninstallDelete]
Type: filesandordirs; Name: "{app}\data"
Type: filesandordirs; Name: "{app}\venv"

[Code]
function InitializeSetup(): Boolean;
var
  PythonVer: String;
  ResultCode: Integer;
begin
  Result := True;
  // Avisa se Python não for encontrado — o launcher cria a venv no primeiro uso,
  // mas precisa de Python instalado no sistema para isso.
  if not Exec('python', '--version', '', SW_HIDE, ewWaitUntilTerminated, ResultCode) then
  begin
    if MsgBox(
      'Python não foi encontrado no seu sistema.' + #13#10 + #13#10 +
      'O Cutia precisa do Python 3.9 ou superior para funcionar.' + #13#10 +
      'Baixe em: https://www.python.org/downloads/' + #13#10 + #13#10 +
      'Deseja continuar a instalação mesmo assim?',
      mbConfirmation, MB_YESNO
    ) = IDNO then
      Result := False;
  end;
end;
