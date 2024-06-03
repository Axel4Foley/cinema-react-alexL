import { Link } from "react-router-dom";

export function Home() {
    return(
        <>
            <div>
                <button>
                    <Link to={"cinemas"}>
                        Vai ai cinema
                    </Link>
                    
                </button>
                
            </div>
        </>
    )
}