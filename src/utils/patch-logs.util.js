import { ITENS_CATEGORIA } from "../constants/itens/itens.constant"
import { ATAQUES_DATA, ITENS_DATA, MAPAS_DATA, PERSONAGENS_DATA } from "../database"

export function patchLogs() {
    let visuais = 0
    PERSONAGENS_DATA.map(personagem=> {
        visuais = visuais + personagem.visuais.length
    })
    let ataques = []
    PERSONAGENS_DATA.map(personagem=> {
        personagem.evolucoes.map(evolucao=>{
            evolucao.ataques.map(ataque=>{
                if(!ataques.some(atq=> atq===ataque)) {
                    ataques.push(ataque)
                }
            })
        })
    })
    let habilidades = []
    PERSONAGENS_DATA.map(personagem=> {
        personagem.evolucoes.map(evolucao=>{
            evolucao.habilidades.map(habilidade=>{
                if(!habilidades.some(hbl=> hbl===habilidade)) {
                    habilidades.push(habilidade)
                }
            })
        })
    })

    console.log(
        `
        Personagens: ${PERSONAGENS_DATA.length}\n
        Visuais: ${visuais}\n
        Mapas: ${MAPAS_DATA.length}\n
        Ataques: ${ataques.length}\n
        Habilidades: ${habilidades.length}\n
        Equipamentos: ${ITENS_DATA.filter(item=>item.categoria===ITENS_CATEGORIA.EQUIPAMENTO).length}\n
        Consumíveis: ${ITENS_DATA.filter(item=>item.categoria===ITENS_CATEGORIA.CONSUMIVEL).length}\n
        `)

}