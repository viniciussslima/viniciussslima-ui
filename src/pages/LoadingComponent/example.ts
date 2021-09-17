const minifyExample = `<div>
    <button onClick={() => setIsLoading(true)}>Open loading</button>
    <Loading isLoading={isLoading} />
</div>`;

const example = `import React, { useState, useEffect } from "react";
import { Loading } from "viniciussslima"

const LoadingExample = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (isLoading) {
            timeout = setTimeout(() => setIsLoading(false), 3000);
        }

        return () => clearTimeout(timeout);
    }, [isLoading]);

    return (
        <div>
            <button onClick={() => setIsLoading(true)}>Open loading</button>
            <Loading isLoading={isLoading} />
        </div>
    )
}`;

export { minifyExample, example };
