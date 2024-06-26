import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { useFormContext } from "react-hook-form";

export function NewCycleForm() {

  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        type="text"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestions">
      </datalist>
      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="0"
        min={5}
        max={60}
        step={5}
        disabled={!!activeCycle}
        {...register('minutesAmount', {
          valueAsNumber: true
        })}
      />
      <span>minutos</span>
    </FormContainer>
  )
}