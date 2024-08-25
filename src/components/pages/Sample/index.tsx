import { Loader } from '@/components'
import { useUIStore } from '@/hooks'
import { SampleDT } from './DT/SampleDT'
import { useSample } from './hooks/useSample'

export const Sample = () => {
  const {
    uiStore: { isLoading },
  } = useUIStore()
  const { sampleInput, setSampleInput, getSample, sampleData } = useSample()
  return (
    <>
      <SampleDT sampleInput={sampleInput} setSampleInput={setSampleInput} getSample={getSample} sampleData={sampleData} />
      {isLoading && <Loader />}
    </>
  )
}
