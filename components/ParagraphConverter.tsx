const ParagraphConverter = (text: string) => {
    const lines = text.split('\n');
    return <>
        {
            lines.map((line, index) => (
                <div key={index} className="mb-2">{line}</div>
            ))
        }
    </>
}

export default ParagraphConverter;