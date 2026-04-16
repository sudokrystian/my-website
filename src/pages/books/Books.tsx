import "./books.scss";
import frontcover from "../../assets/books/front_cover_min.jpg";
import bookPdf from "../../assets/books/IslandOfPeace.pdf";
import bookEpub from "../../assets/books/IslandOfPeace.epub";

const Books = () => {
  return (
    <div className="books-div">
      <div id="main-div">
        <h3 className="book-title">Island Of Peace</h3>
        <hr />
        <div className="book-content">
          <div className="book-image-container">
            <img src={frontcover} alt="Front cover of Island Of Peace" />
          </div>
          <div className="book-text-container">
            <p>
              In a world divided between the privileged Upper World and the
              harsh, untamed Lower World, power is measured not only in titles
              and wealth but in the mastery of magic itself. At the heart of
              this fragile balance stand Sofia Elernes, a noble girl burdened by
              expectations and ideals, and Kristoffer, her servant—bound by
              contract, yet driven by a will that runs deeper than blood or law.
            </p>

            <p>
              When their fates intertwine with conspiracies among nobles, the
              deadly rise of mana beasts, and the awakening of forces tied to
              ancient rifts in reality, both must confront truths that challenge
              not only who they are but what it means to wield magic. For while
              runes and incantations offer structure, true mastery lies beyond
              symbols—in the bond between willpower, knowledge, and the untamed
              depths of the human soul.
            </p>

            <p>
              As whispers of miracles and monsters spread, legends are born. But
              with each step into the unknown, the boundary between savior and
              destroyer grows ever thinner.
            </p>
          </div>
        </div>

        <div className="book-actions">
          <div className="download-buttons">
            <a
              href={bookPdf}
              className="download-btn download-pdf"
              title="Download PDF version"
            >
              📄 Download PDF
            </a>
            <a
              href={bookEpub}
              className="download-btn download-epub"
              title="Download EPUB version"
            >
              📖 Download EPUB
            </a>
          </div>

          <div className="book-reviews">
            <p className="reviews-title">
              If you liked the book, please leave a review:
            </p>
            <ul className="reviews-list">
              <li>
                <a
                  href="https://www.goodreads.com/book/show/242755282-island-of-peace"
                  className="review-link goodreads-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Goodreads
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/Island-Peace-Riftborn-Saga-Book-ebook/dp/B0FW7Y7WM6/"
                  className="review-link amazon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amazon
                </a>
              </li>
            </ul>
          </div>

          <div className="donation-section">
            <p className="donation-text">
              If this story was worth a beer, you can buy me one here:
            </p>
            <div className="donation-links">
              <a
                href="http://paypal.me/krystian963dev"
                className="donation-link paypal"
                title="Support on PayPal"
              >
                PayPal
              </a>
              <a
                href="https://www.patreon.com/sudokrystian"
                className="donation-link patreon"
                title="Support on Patreon"
              >
                Patreon
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Books;
