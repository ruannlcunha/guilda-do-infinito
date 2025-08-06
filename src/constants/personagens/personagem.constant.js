import { ICONS, IMAGES } from "../images";

export const COR_TEMA = {
  AMARELO: "tema-amarelo",
  AZUL: "tema-azul",
  CIANO: "tema-ciano",
  ROXO: "tema-roxo",
  ROXO_ESCURO: "tema-roxo-escuro",
  ROSA: "tema-rosa",
  PRETO: "tema-preto",
  CINZA: "tema-cinza",
  BRANCO: "tema-branco",
  TURQUESA: "tema-turquesa",
  VERDE: "tema-verde",
  VERDE_ESCURO: "tema-verde-escuro",
  LARANJA: "tema-laranja",
  VERMELHO: "tema-vermelho"
};

export const ELEMENTOS = {
  FOGO: "FOGO",
  AGUA: "AGUA",
  ACIDO: "ACIDO",
  ELETRICO: "ELETRICO",
  AR: "AR",
  TERRA: "TERRA",
  GELO: "GELO",
  LUZ: "LUZ",
  TREVAS: "TREVAS",
  NULO: "NULO",
  ESSENCIA: "ESSENCIA",
  FISICO: "FISICO",
  MENTAL: "MENTAL"
};
export const ELEMENTOS_NOMES = {
  FOGO: "Fogo",
  AGUA: "Água",
  ACIDO: "Ácido",
  ELETRICO: "Elétrico",
  AR: "Ar",
  TERRA: "Terra",
  GELO: "Gelo",
  LUZ: "Luz",
  TREVAS: "Trevas",
  NULO: "Nulo",
  ESSENCIA: "Essência",
  FISICO: "Físico",
  MENTAL: "Mental"
};

export const ELEMENTOS_REACOES = {
  FOGO: { vantagem: ELEMENTOS.GELO, desvantagem: ELEMENTOS.AGUA },
  AGUA: { vantagem: ELEMENTOS.FOGO, desvantagem: ELEMENTOS.ELETRICO },
  ACIDO: { vantagem: ELEMENTOS.TERRA, desvantagem: ELEMENTOS.AR },
  ELETRICO: { vantagem: ELEMENTOS.AGUA, desvantagem: ELEMENTOS.TERRA },
  AR: { vantagem: ELEMENTOS.ACIDO, desvantagem: ELEMENTOS.GELO },
  TERRA: { vantagem: ELEMENTOS.ELETRICO, desvantagem: ELEMENTOS.ACIDO },
  GELO: { vantagem: ELEMENTOS.AR, desvantagem: ELEMENTOS.FOGO },
  LUZ: { vantagem: ELEMENTOS.TREVAS, desvantagem: ELEMENTOS.TREVAS },
  TREVAS: { vantagem: ELEMENTOS.LUZ, desvantagem: ELEMENTOS.LUZ },
  ESSENCIA: { vantagem: null, desvantagem: null },
  FISICO: { vantagem: null, desvantagem: null },
  MENTAL: { vantagem: null, desvantagem: null }
};

export const TIPO_CONDICAO = {
  BUFF: "BUFF",
  DEBUFF: "DEBUFF"
};

export const CATEGORIA_CONDICAO = {
  FISICA: "FISICA",
  MENTAL: "MENTAL",
  ACAO: "ACAO"
};

export const RESISTENCIA_DANO = {
  FOGO: "RESISTENCIA_FOGO",
  AGUA: "RESISTENCIA_AGUA",
  ACIDO: "RESISTENCIA_ACIDO",
  ELETRICO: "RESISTENCIA_ELETRICO",
  AR: "RESISTENCIA_AR",
  TERRA: "RESISTENCIA_TERRA",
  GELO: "RESISTENCIA_GELO",
  LUZ: "RESISTENCIA_LUZ",
  TREVAS: "RESISTENCIA_TREVAS",
  ESSENCIA: "RESISTENCIA_ESSENCIA",
  FISICO: "RESISTENCIA_FISICO",
  MENTAL: "RESISTENCIA_MENTAL"
};

export const BONUS_DADO = {
  ATAQUE: "ATAQUE",
  CONJURACAO: "CONJURACAO",
  DANO: "DANO",
  CURA: "CURA",
  RESISTENCIA_FORCA: "RESISTENCIA_FORCA",
  RESISTENCIA_AGILIDADE: "RESISTENCIA_AGILIDADE",
  RESISTENCIA_MAGIA: "RESISTENCIA_MAGIA",
  RESISTENCIA_VIGOR: "RESISTENCIA_CURA",
  DADO_DANO: "DADO_DANO"
};

export const COMPORTAMENTOS = {
  ATACANTE_FEROZ: "ATACANTE_FEROZ",
  ATACANTE_ESPERTO: "ATACANTE_ESPERTO",
  SUPORTE_ESPERTO: "SUPORTE_ESPERTO",
  SUPORTE_MEDICO: "SUPORTE_MEDICO"
};

export const IMUNIDADE_TIPO = {
  DANO: "DANO",
  CONDICAO: "CONDICAO"
};

export const TRANSFORMACOES = {
  LOBO: "Lobo",
  URSO: "Urso",
  AGUIA: "Águia",
  ARANHA: "Aranha",
  LOBISOMEM: "Lobisomem",
};

export const CONDICOES = {
  ENVENENADO: {
    nome: "Envenenado",
    pascalCase: "Envenenado",
    tipo: TIPO_CONDICAO.DEBUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Recebe 1d4 de dano por rodada até acabar o número de rodadas do efeito, ou então usar um item de antídoto.",
    icon: ICONS.CONDICAO_ENVENENADO,
    duracao: 1,
    duracaoTitulo: "Turnos"
  },
  QUEIMANDO: {
    nome: "Queimando",
    pascalCase: "Queimando",
    tipo: TIPO_CONDICAO.DEBUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Recebe 1d6 de dano por rodada até usar uma ação para apagar o fogo.",
    icon: ICONS.CONDICAO_QUEIMANDO
  },
  CONGELADO: {
    nome: "Congelado",
    pascalCase: "Congelado",
    tipo: TIPO_CONDICAO.DEBUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Não pode se mover, ah não ser que em seu turno ele consiga quebrar o gelo ou sofra dano de Fogo.",
    icon: ICONS.CONDICAO_CONGELADO,
    dificuldade: 10
  },
  PARALISADO: {
    nome: "Paralisado",
    pascalCase: "Paralisado",
    tipo: TIPO_CONDICAO.DEBUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Não pode agir por 1 turno.",
    icon: ICONS.CONDICAO_PARALISADO,
    duracao: 1,
    duracaoTitulo: "Turnos"
  },
  DORMINDO: {
    nome: "Dormindo",
    pascalCase: "Dormindo",
    tipo: TIPO_CONDICAO.DEBUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Não pode fazer nada no turno. Duração por turnos. Caso seja atacado ele acorda",
    icon: ICONS.CONDICAO_DORMINDO,
    duracao: 1,
    duracaoTitulo: "Turnos"
  },
  ATORDOADO: {
    nome: "Atordoado",
    pascalCase: "Atordoado",
    tipo: TIPO_CONDICAO.DEBUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Tem 25% de chance de não conseguir realizar a ação.",
    icon: ICONS.CONDICAO_ATORDOADO,
    duracao: 1,
    duracaoTitulo: "Turnos",
    acaoBloqueada: false
  },
  LENTO: {
    nome: "Lento",
    pascalCase: "Lento",
    tipo: TIPO_CONDICAO.DEBUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Personagem sofre -1 em Agilidade e tem seu turno atrasado.",
    icon: ICONS.CONDICAO_LENTO,
    duracao: 1,
    duracaoTitulo: "Turnos"
  },
  VELOZ: {
    nome: "Veloz",
    pascalCase: "Veloz",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Personagem recebe +1 em Agilidade e tem seu turno adiantado.",
    icon: ICONS.CONDICAO_VELOZ,
    duracao: 1,
    duracaoTitulo: "Turnos"
  },
  ARMADURA_MAGICA: {
    nome: "Armadura Mágica",
    pascalCase: "ArmaduraMagica",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Personagem recebe +2 em Defesa até o fim do combate.",
    icon: ICONS.CONDICAO_ARMADURA_MAGICA
  },
  DUPLICATAS: {
    nome: "Duplicatas",
    pascalCase: "Duplicatas",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Sob efeito da habilidade Duplicata Ilusória. Recebe +6 de Defesa, mas perde 2 do bônus a cada tentativa de golpe sofrido.",
    icon: ICONS.CONDICAO_DUPLICATAS,
    duracao: 3,
    duracaoTitulo: "Clones"
  },
  ABENCOADO: {
    nome: "Abençoado",
    pascalCase: "Abencoado",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Sob efeito da habilidade Benção Divina. Recebe +1 em Ataque, Conjuração e Dano até o fim do combate.",
    icon: ICONS.CONDICAO_ABENCOADO
  },
  AMALDICOADO: {
    nome: "Amaldiçoado",
    pascalCase: "Amaldicoado",
    tipo: TIPO_CONDICAO.DEBUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Sob efeito da habilidade Lançar Maldição. Recebe -1 em Ataque, Conjuração e Dano.",
    icon: ICONS.CONDICAO_AMALDICOADO,
    duracao: 1,
    duracaoTitulo: "Turnos"
  },
  ATAQUE_ESPECIAL: {
    nome: "Ataque Especial",
    pascalCase: "AtaqueEspecial",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.ACAO,
    descricao: "Sob efeito da habilidade Ataque Especial. Recebe bônus no seu próximo Ataque.",
    icon: ICONS.CONDICAO_ATAQUE_ESPECIAL,
    bonus: "2",
    bonusTitulo: "Bônus de Ataque"
  },
  SORTUDO: {
    nome: "Sortudo",
    pascalCase: "Sortudo",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "A sorte está ao seu favor. Personagem recebe +1 em Defesa, Ataque, Conjuração e testes de resistência.",
    icon: ICONS.CONDICAO_SORTUDO,
    duracao: 4,
    duracaoTitulo: "Turnos"
  },
  PROTEGIDO: {
    nome: "Protegido",
    pascalCase: "Protegido",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.ACAO,
    descricao: "Está sendo protegido até o próximo turno. Recebe +2 de Defesa.",
    icon: ICONS.CONDICAO_PROTEGIDO,
    personagemId: null,
    personagemTitulo: "Protetor"
  },
  PROTEGENDO: {
    nome: "Protegendo",
    pascalCase: "Protegendo",
    tipo: TIPO_CONDICAO.DEBUFF,
    categoria: CATEGORIA_CONDICAO.ACAO,
    descricao: "Está protegendo um aliado até o próximo turno. Sofre -2 de Defesa.",
    icon: ICONS.CONDICAO_PROTEGENDO,
    personagemId: null,
    personagemTitulo: "Protegido"
  },
  ABALADO: {
    nome: "Abalado",
    pascalCase: "Abalado",
    tipo: TIPO_CONDICAO.DEBUFF,
    categoria: CATEGORIA_CONDICAO.MENTAL,
    descricao: "Personagem sofre -1 em Magia.",
    icon: ICONS.CONDICAO_ABALADO,
    duracao: 1,
    duracaoTitulo: "Turnos"
  },
  FATIGADO: {
    nome: "Fatigado",
    pascalCase: "Fatigado",
    tipo: TIPO_CONDICAO.DEBUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Personagem sofre -1 em Vigor.",
    icon: ICONS.CONDICAO_FATIGADO,
    duracao: 1,
    duracaoTitulo: "Turnos"
  },
  FRACO: {
    nome: "Fraco",
    pascalCase: "Fraco",
    tipo: TIPO_CONDICAO.DEBUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Personagem sofre -1 em Força.",
    icon: ICONS.CONDICAO_FRACO,
    duracao: 1,
    duracaoTitulo: "Turnos"
  },
  ESCONDIDO: {
    nome: "Escondido",
    pascalCase: "Escondido",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.ACAO,
    descricao: "Está escondido da visão dos inimigos, o próximo ataque causa dano furtivo.",
    icon: ICONS.CONDICAO_ESCONDIDO,
    bonus: "1d6",
    bonusTitulo: "Ataque Furtivo"
  },
  ATAQUE_DIVINO: {
    nome: "Ataque Divino",
    pascalCase: "AtaqueDivino",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.ACAO,
    descricao: "Personagem recebe um bônus de Ataque igual a seu atributo de Magia e mais um bônus de dano no seu próximo Ataque.",
    icon: ICONS.CONDICAO_ATAQUE_DIVINO_LUZ,
    bonus: "1d8",
    bonusTitulo: "Bônus de dano (Luz)"
  },
  ARMA_ENCANTADA: {
    nome: "Arma Encantada",
    pascalCase: "ArmaEncantada",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Sob efeito da habilidade Encantar Arma. Recebe +1 de Ataque e Dano até o fim do combate.",
    icon: ICONS.CONDICAO_ENCANTAR_ARMA
  },
  ARMA_ABENCOADA: {
    nome: "Arma Abençoada",
    pascalCase: "ArmaAbencoada",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Sob efeito da habilidade Abençoar Arma. Recebe +1 de Ataque e Dano até o fim do combate.",
    icon: ICONS.CONDICAO_ABENCOAR_ARMA,
    bonus: "1d6",
    bonusTitulo: "Bônus de dano (Luz)"
  },
  PROTECAO_ARCANA: {
    nome: "Proteção Arcana",
    pascalCase: "ProtecaoArcana",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Sob efeito da habilidade Proteção Arcana. Recebe 5 de Resistência a Dano deste elemento até o fim do combate.",
    icon: ICONS.CONDICAO_PROTECAO_ARCANA,
    bonus: 5,
    bonusTitulo: "Resistência a Dano",
    elemento: ELEMENTOS.ESSENCIA
  },
  PROTECAO_DIVINA: {
    nome: "Proteção Divina",
    pascalCase: "ProtecaoDivina",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Sob efeito da habilidade Proteção Divina. Recebe 5 de Resistência a Dano deste elemento até o fim do combate.",
    icon: ICONS.CONDICAO_PROTECAO_DIVINA,
    bonus: 5,
    bonusTitulo: "Resistência a Dano",
    elemento: ELEMENTOS.LUZ
  },
  INSPIRADO: {
    nome: "Inspirado",
    pascalCase: "Inspirado",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Sob efeito da habilidade Inspirar Aliados. Recebe bônus em Ataque e Conjuração até o fim do combate.",
    bonus: 1,
    bonusTitulo: "Bônus",
    icon: ICONS.CONDICAO_INSPIRADO
  },
  ATAQUE_PODEROSO: {
    nome: "Ataque Poderoso",
    pascalCase: "AtaquePoderoso",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.ACAO,
    descricao: "Sob efeito da habilidade Ataque Poderoso. No seu próximo Ataque sofre -2 no teste, mas recebe +5 no Dano.",
    icon: ICONS.CONDICAO_ATAQUE_PODEROSO
  },
  MARCA_CACADOR: {
    nome: "Marca do Caçador",
    pascalCase: "MarcaCacador",
    tipo: TIPO_CONDICAO.DEBUFF,
    categoria: CATEGORIA_CONDICAO.ACAO,
    descricao: "Personagem está marcado com a Marca do Caçador. Sofre um bônus de Dano do caçador até o fim do combate.",
    icon: ICONS.CONDICAO_MARCA_CACADOR,
    bonus: "1d4",
    bonusTitulo: "Bônus de Dano",
    personagemId: null,
    personagemTitulo: "Caçador"
  },
  CACADOR: {
    nome: "Caçador",
    pascalCase: "Cacador",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.ACAO,
    descricao: "Personagem marcou um inimigo com a Marca do Caçador. Causa um bônus de Dano na presa até o fim do combate.",
    icon: ICONS.CONDICAO_MARCA_CACADOR,
    bonus: "1d4",
    bonusTitulo: "Bônus de Dano",
    personagemId: null,
    personagemTitulo: "Presa"
  },
  FURIA: {
    nome: "Em Fúria",
    pascalCase: "EmFuria",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.ACAO,
    descricao: "Personagem recebe bônus em Ataque e Dano, mas não pode realizar ações mágicas. Deve atacar toda rodada, se não perde a condição.",
    icon: ICONS.CONDICAO_FURIA,
    bonus: 2,
    bonusTitulo: "Bônus",
    duracao: 0,
    duracaoTitulo: "Turnos"
  },
  ATAQUE_AGIL: {
    nome: "Ataque Ágil",
    pascalCase: "AtaqueAgil",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.ACAO,
    descricao: "Sob efeito da habilidade Ataque Ágil. Personagem usa o atributo Agilidade nos Ataques Corpo-a-corpo invés de Força.",
    icon: ICONS.CONDICAO_ATAQUE_AGIL
  },
  VOANDO: {
    nome: "Voando",
    pascalCase: "Voando",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.ACAO,
    descricao: "Personagem recebe +2 de Defesa, mas não pode realizar ataques Corpo-a-corpo.",
    icon: ICONS.CONDICAO_VOANDO
  },
  FORMA_ANIMAL: {
    nome: "Forma Animal",
    pascalCase: "FormaAnimal",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.ACAO,
    descricao: "Personagem está transformado em um animal. Recebe bônus e ações próprias da forma escolhida.",
    icon: ICONS.CONDICAO_FORMA_ANIMAL,
    bonus: TRANSFORMACOES.LOBO,
    bonusTitulo: "Animal",
    personagemOriginal: {},
  },
  FORMA_LUPINA: {
    nome: "Forma Lupina",
    pascalCase: "FormaLupina",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.ACAO,
    descricao: "Personagem está transformado em um Lobisomem. Recebe +1 em Força, Agilidade e Vigor, +2 em Ataque e Dano e +20 PV.",
    icon: ICONS.CONDICAO_FORMA_LUPINA,
    personagemOriginal: {},
  },
  REGENERACAO: {
    nome: "Regeneração",
    pascalCase: "Regeneracao",
    tipo: TIPO_CONDICAO.BUFF,
    categoria: CATEGORIA_CONDICAO.FISICA,
    descricao: "Personagem possui efeitos regenerativos. Todo início de seu turno cura um valor de PV.",
    icon: ICONS.CONDICAO_REGENERACAO,
    bonus: 1,
    bonusTitulo: "Cura",
    infinita: false,
  },
};
