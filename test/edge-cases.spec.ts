import { assertValidSchema } from "./utils";

describe("recursive types", () => {
    it(
        "returns the correct schema when using pick for recursive types",
        assertValidSchema("recursion-with-pick", "DtoOfMyInterface")
    );

    it(
        "returns the correct schema when using omit for recursive types",
        assertValidSchema("recursion-with-omit", "DtoOfMyInterface")
    );
});
