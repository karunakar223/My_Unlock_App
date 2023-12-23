// Write your code here
import {useState} from 'react'
import {
  UnlockContainer,
  ImageContainer,
  Image,
  Paragraph,
  ButtonContainer,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(false)

  const onClickBtn = () => setLock(prevState => !prevState)

  const imgEl = lock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = lock ? 'unlock' : 'lock'
  const parText = lock ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const btnText = lock ? 'Lock' : 'Unlock'

  return (
    <UnlockContainer>
      <ImageContainer>
        <Image src={imgEl} alt={altText} />
        <Paragraph>{parText}</Paragraph>
      </ImageContainer>
      <ButtonContainer>
        <Button type="button" onClick={onClickBtn}>
          {btnText}
        </Button>
      </ButtonContainer>
    </UnlockContainer>
  )
}

export default Unlock
