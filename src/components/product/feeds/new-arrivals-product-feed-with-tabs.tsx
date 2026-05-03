import SectionHeader from "@components/common/section-header";
import ProductsBlock from "@containers/products-block";
import { useProductsQuery } from "@framework/product/get-all-products-2";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useTranslation } from "next-i18next";
import { ROUTES } from "@utils/routes";

const NewArrivalsProductFeedWithTabs: React.FC<any> = () => {
  const { t } = useTranslation("common");

  const { data, isLoading, error } = useProductsQuery({
    limit: 10,
  });

  return (
    <div className="mb-12 md:mb-14 xl:mb-16">
      <SectionHeader
        sectionHeading="text-new-arrivals"
        className="pb-0.5 mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 2xl:mb-4 3xl:mb-5"
        categorySlug={ROUTES.SEARCH}
        linkText="text-shop-now"
        linkClassName="text-sm px-5 py-2.5 font-semibold text-white bg-heading hover:bg-gray-800 rounded-md transition duration-200"
      />

      <TabGroup as="div" className="">
        <TabList as="ul" className="tab-ul">
          <Tab
            as="li"
            className={({ selected }) =>
              selected
                ? "tab-li-selected"
                : "tab-li focus-visible:outline-0 focus-visible:outline-transparent"
            }
          >
            <p>{t("tab-all")}</p>
          </Tab>
          <Tab
            as="li"
            className={({ selected }) =>
              selected ? "tab-li-selected" : "tab-li"
            }
          >
            <p>{t("tab-bottles-mugs")}</p>
          </Tab>
          <Tab
            as="li"
            className={({ selected }) =>
              selected ? "tab-li-selected" : "tab-li"
            }
          >
            <p>{t("tab-keychains")}</p>
          </Tab>
          <Tab
            as="li"
            className={({ selected }) =>
              selected ? "tab-li-selected" : "tab-li"
            }
          >
            <p>{t("tab-stationery")}</p>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ProductsBlock
              products={data?.slice(0, 8)}
              loading={isLoading}
              error={error?.message}
              uniqueKey="new-arrivals"
              variant="gridModernWide"
              imgWidth={435}
              imgHeight={435}
            />
          </TabPanel>
          <TabPanel>
            <ProductsBlock
              products={data?.slice(4, 12)}
              loading={isLoading}
              error={error?.message}
              uniqueKey="new-arrivals"
              variant="gridModernWide"
              imgWidth={435}
              imgHeight={435}
            />
          </TabPanel>
          <TabPanel>
            <ProductsBlock
              products={data?.slice(8, 16)}
              loading={isLoading}
              error={error?.message}
              uniqueKey="new-arrivals"
              variant="gridModernWide"
              imgWidth={435}
              imgHeight={435}
            />
          </TabPanel>
          <TabPanel>
            <ProductsBlock
              products={data?.slice(14, 22)}
              loading={isLoading}
              error={error?.message}
              uniqueKey="new-arrivals"
              variant="gridModernWide"
              imgWidth={435}
              imgHeight={435}
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default NewArrivalsProductFeedWithTabs;
