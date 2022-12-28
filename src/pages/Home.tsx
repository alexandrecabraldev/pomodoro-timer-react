import { Play } from "phosphor-react"
import {HomeStyle, TimmerSection, Division, TextInformation} from "./HomeStyle"

export function Home(){
    return (
        <HomeStyle>
            <form action="">
                <TextInformation>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <input type="text" id="task" placeholder="Dê um nome para o seu projeto"/>

                    <label htmlFor="time">durante</label>
                    <input type="number" id="time" min={1} max={60} placeholder="00"/>

                    <span>minutos</span>
                </TextInformation>

                <TimmerSection>
                    <span>0</span>
                    <span>0</span>

                    <Division>:</Division>

                    <span>0</span>
                    <span>0</span>
                </TimmerSection>

                <button type="submit"> <Play/> Começar </button>
            </form>
        </HomeStyle>
    )
}