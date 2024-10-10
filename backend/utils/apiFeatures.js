class APIfeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    paginate(resultPerPage)
    {
        const currentPage = Number(this.queryString.page) || 1; //if there are no page query paramter, the output will be the products that is intended to shown on the first page.
        const skip = resultPerPage * currentPage -1;
        this.query.limit(resultPerPage).skip(skip);
        return this;

    }
}
module.exports = APIfeatures;
