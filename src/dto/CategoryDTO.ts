export type CategoryAttributes = {
    id?: string,
    name: string,
} 

export class CategoryDTO {
    private id: string
    private name: string

    constructor(payload: CategoryAttributes) {
        this.id = payload.id ?? ''
        this.name = payload.name
    }

    public getId(): string
    {
        return this.id

    }
    public getName(): string
    {
        return this.name
    }

    public serializeToObject(): object
    {
        return {
            id: this.id,
            name: this.name
        }
    }
}