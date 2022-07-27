export default function Joke (props) {
    return(
        <>
          <h4> {props.Setup} </h4>  
          <p> {props.Punchline} </p>  
          <p> {props.Upvotes} </p>
          <p> {props.Downvotes} </p>
          <p> {props.Comments} </p>
          <p> {props.isPun} </p>
          <hr />
        </>
    )
}