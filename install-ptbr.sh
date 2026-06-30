#!/bin/bash

# 🇧🇷 Instalador Odysseus PT-BR para Linux/Mac
# Script facilitado para clonar e configurar Odysseus com tradução PT-BR

echo -e "\n\033[36m=== Odysseus em Português Brasileiro ===\033[0m"
echo -e "\033[32mInstalador Automático para Linux/Mac\033[0m"

# Verificar requisitos
echo -e "\n\033[33m[1/5] Verificando requisitos...\033[0m"

if ! command -v python3 &> /dev/null; then
    echo -e "\033[31m❌ Python3 não encontrado\033[0m"
    echo "Instale com: brew install python3 (Mac) ou apt install python3 (Linux)"
    exit 1
fi

python_version=$(python3 --version)
echo -e "\033[32m✓ Python encontrado: $python_version\033[0m"

if ! command -v git &> /dev/null; then
    echo -e "\033[31m❌ Git não encontrado\033[0m"
    exit 1
fi

echo -e "\033[32m✓ Git encontrado\033[0m"

# Escolher diretório
echo -e "\n\033[33m[2/5] Configurando diretório...\033[0m"

read -p "Diretório de instalação (padrão: ~/odysseus-ptbr): " install_dir
install_dir=${install_dir:-"$HOME/odysseus-ptbr"}

mkdir -p "$install_dir"
cd "$install_dir"
echo -e "\033[32m✓ Diretório: $install_dir\033[0m"

# Clonar repositório
echo -e "\n\033[33m[3/5] Clonando repositório PT-BR...\033[0m"

if [ -d "odysseus/.git" ]; then
    echo -e "\033[36mℹ️  Repositório já existe. Atualizando...\033[0m"
    cd odysseus
    git fetch origin
    git checkout feature/pt-br-translation
else
    git clone --branch feature/pt-br-translation https://github.com/FinweeJur/odysseus.git
    cd odysseus
    echo -e "\033[32m✓ Repositório clonado\033[0m"
fi

# Criar venv e instalar dependências
echo -e "\n\033[33m[4/5] Configurando ambiente Python...\033[0m"

if [ ! -d "venv" ]; then
    python3 -m venv venv
    echo -e "\033[32m✓ Ambiente virtual criado\033[0m"
fi

source venv/bin/activate
pip install -q -r requirements.txt 2>/dev/null
echo -e "\033[32m✓ Dependências instaladas\033[0m"

# Finalizar
echo -e "\n\033[32m[5/5] Configuração concluída!\033[0m"

echo -e "\n\033[36m📋 Próximos passos:
1. Instale Ollama (opcional, para LLMs locais):
   https://ollama.ai

2. Inicie o Odysseus:
   python app.py

3. Acesse no navegador:
   http://127.0.0.1:7000

4. Login padrão:
   Usuário: admin
   Senha: admin123

5. Configure seu LLM em Settings → Providers
\033[0m"

read -p "Iniciar Odysseus agora? (S/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Ss]$ ]]; then
    python app.py
fi
