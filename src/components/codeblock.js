import React from "react"
import Highlight, {defaultProps} from "prism-react-renderer"
import "../styles/CodeBlock.css";

export default function CodeBlock(props) {
    return (
        <Highlight {...defaultProps} 
            code={props.code} 
            language={props.language}
            theme={props.theme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            <span className="lineNumber">{i + 1}</span>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
}