import { Play } from "phosphor-react"
import {useForm} from "react-hook-form";
import {HomeStyle, TimmerSection, Division, TextInformation} from "./HomeStyle"

export function Home(){

    const {register, handleSubmit, watch } = useForm();
    
    function handleCreateTask(data: any){
        console.log(data); 
    }

    const task = watch("inputTask");
    const isDisabledOn = !task;

    return (
        <HomeStyle>
            <form action="" onSubmit={handleSubmit(handleCreateTask)}>
                <TextInformation>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <input type="text" id="task" placeholder="Dê um nome para o seu projeto"
                    {...register("inputTask")}
                    />

                    <label htmlFor="time">durante</label>
                    <input type="number" id="time" min={1} max={60} placeholder="00"
                    {...register("inputNumberTask", {valueAsNumber:true})}
                    />

                    <span>minutos</span>
                </TextInformation>

                <TimmerSection>
                    <span>0</span>
                    <span>0</span>

                    <Division>:</Division>

                    <span>0</span>
                    <span>0</span>
                </TimmerSection>

                <button type="submit" disabled={isDisabledOn}> <Play/> Começar </button> 
            </form>
        </HomeStyle>
    )
}