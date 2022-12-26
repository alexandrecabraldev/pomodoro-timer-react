import { Play } from "phosphor-react"
import {HomeStyle, TimmerSection, Division} from "./HomeStyle"

export function Home(){
    return (
        <HomeStyle>
            <form action="">
                <div>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <input type="text" id="task" />

                    <label htmlFor="time">durante</label>
                    <input type="text" id="time" />

                    <span>minutos</span>
                </div>

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