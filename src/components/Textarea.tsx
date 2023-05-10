

export function Textarea(props) {

  return (
    <textarea onChange={(e) => props.updateValue(e.target.value)}>
      {props.value}
    </textarea>
  )
}
