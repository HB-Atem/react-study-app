import type { QueryParamGetSample, ResponseGetSample } from '@/models'
import { container } from './SampleDT.css'

type Props = {
  sampleInput: string
  setSampleInput: React.Dispatch<React.SetStateAction<string>>
  getSample: (param: QueryParamGetSample) => Promise<void>
  sampleData?: ResponseGetSample
}

export const SampleDT = (props: Props) => {
  const { sampleInput, setSampleInput, getSample, sampleData } = props
  return (
    <div className={container}>
      <p>サンプルページ</p>
      <input type="text" onInput={(e) => setSampleInput(e.currentTarget.value)} data-testid="sampleInput" />
      <p data-testid="inputData">{sampleInput}</p>
      {!sampleData && (
        <button
          type="button"
          onClick={() => {
            getSample({ param: 'sample' })
          }}
          data-testid="getSampleButton"
        >
          Sample Get API
        </button>
      )}
      <table border={1}>
        <thead>
          <tr>
            <th>データ</th>
          </tr>
        </thead>
        <tbody>
          {sampleData?.data.map((data) => (
            <tr key={data}>
              <td data-testid={`sample-${data}`}>{data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
