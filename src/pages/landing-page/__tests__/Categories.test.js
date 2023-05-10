import { render, screen, fireEvent } from '@testing-library/react';
import Categories from "../categories/Categories";

describe('Categories', () => {
  it('should render without crashing', () => {
    render(<Categories />);
    expect(screen.getByTestId('main-container')).toBeInTheDocument();
  });

  it('should display category cards on the page', () => {
    render(<Categories />);
    expect(screen.getByTestId('category-cards-container')).toBeInTheDocument();
  });

  it('should display the location on the page', () => {
    render(<Categories />);
    expect(screen.getByTestId('location-text')).toBeInTheDocument();
  });

//   it('should navigate to the correct category when the category tab is clicked', () => {
//     render(<Categories />);
//     fireEvent.click(screen.getByTestId('online-link'));
//     expect(screen.getByTestId('category-cards-container')).toHaveTextContent('Online');
//   });

//   it('should call the correct function with the right argument when a category card is clicked', () => {
//     const navigate = jest.fn();
//     render(<Categories navigate={navigate} />);
//     fireEvent.click(screen.getByTestId('music-card'));
//     expect(navigate).toHaveBeenCalledWith('/categorized/Music/0/0');
//   });
});
