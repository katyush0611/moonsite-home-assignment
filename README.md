# Moonsite Home Assignment

## Run Locally

Clone the project

```bash
  git clone https://github.com/katyush0611/moonsite-home-assignment.git
```

Go to the project directory

```bash
  cd moonsite-home-assignment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Visit App

```bash
localhost:5173/
```

## Tech Stack

**Client:** React, Redux, SCSS, Ant design

## App Content

- Home Page
  ![Home Page Screenshot](./src//assets/images/home-page-screenshot.jpeg)

- Outfit Builder Page
  ![OutfitBuilder Page Screenshot](./src//assets/images/outfitbuilder-page-screenshot.jpeg)
- Saved Outfits Page
  ![Saved Outfits Page Screenshot](./src//assets/images/outfits-page-screenshot.jpeg)

## Home Page

#### Features

- Fetch all garments from API service and set the store on init
- Saved outfits count
  - navigate to outfits page on click
- Availble garments count
  - for each garment type
- Button for each garment type
  - on click navigating to outfit builder page and starting the proccess with the chosen garment type.

## OutfitBuilder

#### Custom hooks

| Name                    | Description                                                  |
| :---------------------- | :----------------------------------------------------------- |
| `useOutfitBuilderSteps` | For initial step build                                       |
| `useOutfitSelection`    | Managing the on garment select logic and outfit object build |
| `useRecommendations`    | Managed by useOutfitSelection for inserting recommendations  |

#### Features

- Filters - user can filter garments by 3 parameters: brand, color and size.
- **Recommendations algorithm** - when garment is selected, the app will sort the next outfit builder step garments list by size and color, based on the selected garment size and color. according to the following logic ->

  - By color recommendation util, it basicaly takes a color name and by converting it to rgb maps the availableColors (converting them to) and by calculating the colorDistance we can sort the "more" compatible colors.

  - By Size recommendations, the app has a SizeTag system that converts all garment type sizes to universal unit.
    the app uses 7 SizeTag units. and by calculating the size score of the SizeTag the util apply the same score to the availble sizes to.

    ```dash
      enum SizeTag {
        XXS = "XXS",
        XS = "XS",
        S = "S",
        M = "M",
        L = "L",
        XL = "XL",
        XXL = "XXL",
      }
    ```

  ```dash
    const selectedGarmentSizeTag = S;                            // given SizeTag
    const sizeTagsArray = [XXS, XS, S, M, L, XL. XXL];         // sizeTags count(length): 7
    const availbleSizes = [35, 36, 37, 39, 41, 42, 44, 45, 46];

    const sizeTagScore = (sizeTagsArray[selectedGarmentSizeTag] + 1) / sizeTagsArray.length;   // (3/7) = 0.42
    const sizeXscore = sizeTagscore * availbleSizes.length;                     // 0.42 * 9 = 3.85 in our case

    //**  sizeXscore represents the place in order where the size is according to all availble sizes.
    //**  then we do Math.floor()
    //**  so availbleSizes[3 - 1] will give us 37
    //**  and for the second option Math.floor() + 1
    //**  so availbleSizes[4 - 1] will give us 38

    return [availbleSizes[Math.floor(sizeXscore)], availbleSizes[Math.floor(sizeXscore)]]

    recommended (shoes for this example) sizes for 'S' SizeTag (can be shirt or pants) are [37, 38]
  ```

```dash
recommendFromGarmentColor: (props) => string[];
```

| Prop Name         | Type       | Description                             |
| :---------------- | :--------- | :-------------------------------------- |
| `garmentColor`    | `string`   | selected garment color                  |
| `availableColors` | `string[]` | next garment type availble colors       |
| `count`           | `number`   | number of results to return (default 3) |

```dash
  recommendFromGarmentSize: (props) => (string | number)[];
```

| Prop Name       | Type                   | Description                      |
| :-------------- | :--------------------- | :------------------------------- |
| `sizeTag`       | `SizeTag`              | the garment size in SizeTag unit |
| `availbleSizes` | `(string \| number)[]` | next step garment sizes          |

### Examples:

```dash
recommendFromGarmentSize("S", [35,36,37,,39,42...45,46]) === [36, 37]

recommendFromGarmentColor("red", ["white", "red", "pink", "green"]) === ["red", "white", "pink"]
```

## Saved Outfits Page

#### Features

- Displays a list of outfits, showing outfit garments and it parameters (brand, size, color)

```dash
interface Outfit {
  id: number;
  shirt: Garment<"shirt">;
  pants: Garment<"pants">;
  shoes: Garment<"shoes">;
}
```
