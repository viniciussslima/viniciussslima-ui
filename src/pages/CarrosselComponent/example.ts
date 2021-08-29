const minifyExample = `<Carrossel itemWidth={500} height={100} space={10} qty={2} timeout={3000}>
    <CarrosselItem
        style={{
            backgroundColor: "aqua",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        1
    </CarrosselItem>
    <CarrosselItem
        style={{
            backgroundColor: "aqua",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        2
    </CarrosselItem>
    <CarrosselItem
        style={{
            backgroundColor: "aqua",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        3
    </CarrosselItem>
</Carrossel>`;

const example = `import React from "react";
import { Carrossel, CarrosselItem } from "viniciussslima"

const CarrosselExample = () => {
    return (
        <Carrossel itemWidth={500} height={100} space={10} qty={2} timeout={3000}>
            <CarrosselItem
                style={{
                    backgroundColor: "aqua",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                1
            </CarrosselItem>
            <CarrosselItem
                style={{
                    backgroundColor: "aqua",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                2
            </CarrosselItem>
            <CarrosselItem
                style={{
                    backgroundColor: "aqua",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                3
            </CarrosselItem>
        </Carrossel>
    )
}`;

export { minifyExample, example };
