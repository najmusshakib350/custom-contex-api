import HoverCounter from './HoverCounter';
import ThemeContent from "./../lib/themContext";
export default function Content(){
    return(
        <div>
            <h1>This is a content</h1>
            <ThemeContent.Consumer>
                {
                    (theme)=>{
                        return <HoverCounter theme={theme}/>
                    }
                }
            </ThemeContent.Consumer>
        </div>
    )
}