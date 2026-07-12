export class PaginationHelper {
	public constructor(private collection: unknown[], private itemsPerPage: number) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage
	}

	public itemCount(): number {
    return this.collection.length;
	}

	public pageCount(): number {
    return Math.ceil(this.collection.length / this.itemsPerPage);
	}

	public pageItemCount(pageIndex: number): number {
    if(this.collection.length === 0 || pageIndex < 0 || this.collection.length < this.itemsPerPage && pageIndex !== 0 ) return -1
    if(this.collection.length < this.itemsPerPage) return this.collection.length
    pageIndex += 1
    const pageCount = this.pageCount();

    if(pageCount > pageIndex || this.collection.length % this.itemsPerPage === 0){
      if(pageCount === pageIndex) return this.itemsPerPage
      return pageCount > pageIndex ? this.itemsPerPage : -1
    }
      else {
         return pageCount === pageIndex ? this.collection.length % this.itemsPerPage : -1;
          }

    }
	public pageIndex(itemIndex: number): number {

    if(itemIndex < 0) return -1 
    if(itemIndex === 0 && this.collection.length) return 0
    return itemIndex > this.collection.length - 1 ? -1 : Math.floor(itemIndex / this.itemsPerPage) ;
	}
}