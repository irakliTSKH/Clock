import * as S from './styles.ts'
import Time from './Time.ts'



export default function App() {


  const time = Time()
  console.log(time)


  return (
      <S.Wrapper>
        <S.Clock>
          <S.HourHand rotation={time.hours}/>
          <S.MinuteHand rotation={time.minutes} />
          <S.SecondeHand rotation={time.seconds}/>
        </S.Clock>
      </S.Wrapper>
    
  )
}




