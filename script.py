
# Dados dos surfistas
nome = "Gabriel Medina"
idade = 20
profissao = "surfista"
nome2 = "Eduardo Surf"
idade2 = 19
profissao2 = "surfista"

# Classe para avaliar as ondas
class GAb:
    def __init__(self):
        self.tipos_ondas = [
            "onda irada de 50 metros",
            "onda mediana de 30 metros",
            "onda boa de 39 metros",
            "onda incrível de 45 metros",
            "onda final de 60 metros"
        ]
        self.ondas = []  # Lista para armazenar as descrições e notas das ondas

    def avaliar_onda(self):
        for i in range(5):  # Avaliando 5 ondas
            descricao = input(f"{self.tipos_ondas[i]} que {nome} pegou: ")
            print(f"\nDescrição da {self.tipos_ondas[i]}: {descricao}")
            nota = int(input(f'Digite a nota para essa onda (0, 1, 5 ou 10): '))
            while nota not in [0, 1, 5, 10]:
                print("Nota inválida. Use apenas 0, 1, 5 ou 10.")
                nota = int(input(f'Digite a nota para essa onda (0, 1, 5 ou 10): '))
            self.ondas.append({'descricao': descricao, 'nota': nota})

    def exibir_notas(self):
        print(f"\nResultados das ondas de {nome}:")
        for i, onda in enumerate(self.ondas, start=1):
            print(f"Onda {i}: {onda['descricao']} | Nota: {onda['nota']}")
        print(f"Soma das notas: {self.soma_notas()}")

    def soma_notas(self):
        return sum(onda['nota'] for onda in self.ondas)

# Criando uma instância da classe GAb para Gabriel Medina
GabrielMedina = GAb()

# Avaliando as ondas
GabrielMedina.avaliar_onda()

# Exibindo as notas e as descrições das ondas
GabrielMedina.exibir_notas()
