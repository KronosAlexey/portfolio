import {
  Container,
  Filters,
  ProductCard,
  ProductGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Пицца"
                items={[
                  {
                    id: 1,
                    name: "Пицца-Чизбургер",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: "Пицца-Чизбургер",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: "Пицца-Чизбургер",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: "Пицца-Чизбургер",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: "Пицца-Чизбургер",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: "Пицца-Чизбургер",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 7,
                    name: "Пицца-Чизбургер",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 8,
                    name: "Пицца-Чизбургер",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductGroupList
                title="Роллы"
                items={[
                  {
                    id: 1,
                    name: "Пицца-Чизбургер",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee797022f9ad72ac34e1b01dc6aeba.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: "Пицца-Чизбургер",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: "Пицца-Чизбургер",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: "Пицца-Чизбургер",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: "Пицца-Чизбургер",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: "Пицца-Чизбургер",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 7,
                    name: "Пицца-Чизбургер",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 8,
                    name: "Пицца-Чизбургер",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
