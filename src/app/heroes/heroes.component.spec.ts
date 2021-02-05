import { HeroesComponent } from "./heroes.component";
import { of } from 'rxjs';

describe("HeroesComponent", () => {
    let heroesComponent;
    let HEROES;
    let mockHoresService = jasmine.createSpyObj(["addHero", "deleteHero", "getHeroes"])
    beforeEach(() => {
        HEROES = [
            { id: 1, name: "Lamar", strength: 15 },
            { id: 2, name: "Zackery", strength: 21 },
            { id: 3, name: "Beahan", strength: 10 },
        ];

        heroesComponent = new HeroesComponent(mockHoresService);

    });
    it("delete", () => {
        // arange
        heroesComponent.heroes = HEROES;
        mockHoresService.deleteHero.and.returnValue(of(null))
        // acte
        heroesComponent.delete(HEROES[2]);
        // aserte
        expect(heroesComponent.heroes[2]).toBeUndefined();

    })

})