import useToggleState from "@lib/hooks/use-toggle-state"
import { searchClient, SEARCH_INDEX_NAME } from "@lib/search-client"
import Modal from "@modules/common/components/modal"
import Search from "@modules/common/icons/search"
import DesktopHit from "@modules/search/components/desktop-hit"
import DesktopHits from "@modules/search/components/desktop-hits"
import SearchBox from "@modules/search/components/search-box"
import { InstantSearch } from "react-instantsearch-hooks-web"

const DesktopSearchModal = () => {
  const { state, close, open } = useToggleState()

  return (
    <>
      <button onClick={open} className="flex h-full items-center gap-x-2">
        <Search />
        Search
      </button>

      <Modal isOpen={state} close={close} size="large">
        <Modal.Body>
          <InstantSearch
            indexName={SEARCH_INDEX_NAME}
            searchClient={searchClient}
          >
            <div className="flex h-full flex-col">
              <div className="flex w-full items-center gap-x-2 bg-gray-50 p-4">
                <Search />
                <SearchBox />
              </div>

              <div className="no-scrollbar mt-6 flex-1 overflow-y-scroll">
                <DesktopHits hitComponent={DesktopHit} />
              </div>
            </div>
          </InstantSearch>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default DesktopSearchModal
