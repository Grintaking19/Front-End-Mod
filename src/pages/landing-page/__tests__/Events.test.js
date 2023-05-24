import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import Events from '../events/Events';

jest.mock('axios');

describe('Events component', () => {
  const props = {
    activeTab: '',
    location: {
      latitude: 0,
      longitude: 0,
      city: '',
      loading: false,
    },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  // When the component is first rendered and events are being fetched, it should show a "Loading..." message.
  // When events are successfully fetched, it should display them on the page.
  it('should render "Loading..." message when fetching events', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        data: {
          events: [],
        },
      },
    });
    render(<Events {...props} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
  });

  it('should render events', async () => {
    const events = [
      { _id: '1', title: 'Event 1' },
      { _id: '2', title: 'Event 2' },
    ];
    axios.get.mockResolvedValueOnce({
      data: {
        data: {
          events,
        },
      },
    });
    render(<Events {...props} />);

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.getByText('Event 2')).toBeInTheDocument();
  });


   // When an event card is clicked, it should navigate to the event details page
  it('should handle event card clicks', async () => {
    const events = [
      { _id: '1', title: 'Event 1' },
      { _id: '2', title: 'Event 2' },
    ];
    axios.get.mockResolvedValueOnce({
      data: {
        data: {
          events,
        },
      },
    });
    const navigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      useNavigate: () => navigate,
    }));
    render(<Events {...props} />);
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    userEvent.click(screen.getByText('Event 1'));
    expect(navigate).toHaveBeenCalledWith('/events/1');

    userEvent.click(screen.getByText('Event 2'));
    expect(navigate).toHaveBeenCalledWith('/events/2');
  });
});
