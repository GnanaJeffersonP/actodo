function Card(props){
    return(<div style={{backgroundColor: props.bgColor}} className="rounded-md p-2 text-center my-4   flex-grow ">
          <h1 className="text-2xl font-bold">{props.title}</h1>
          <p className="text-lg">{props.subtitle}</p>
        </div>
    )
}

export default Card